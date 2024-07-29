import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateProduct.css';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: '',
    category: '',
    brand: '',
    standardPrice: '',
    priceByCompany: [],
    additionalInfo: '',
    sku: '',
    tag: '',
    images: ''
  });
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem('token'); // Use the token from local storage

  useEffect(() => {
    // Fetch categories
    axios.get(`${baseUrl}/api/category`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));

    // Fetch brands
    axios.get(`${baseUrl}/api/brand`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => setBrands(response.data))
      .catch(error => console.log(error));

    // Fetch companies
    axios.get(`${baseUrl}/api/company`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => setCompanies(response.data))
      .catch(error => console.log(error));
  }, [baseUrl, token]);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('featuredImage', featuredImage);
    galleryImages.forEach(image => {
      formData.append('galleryImages', image);
    });

    try {
      const response = await axios.post(`${baseUrl}/api/product-image`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data)
      setProductDetails({ ...productDetails, images: response.data._id });
      setIsImageUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      ...productDetails,
      priceByCompany: [
        {
          companyId: productDetails.company,
          price: productDetails.price
        }
      ],
      additionalInfo: productDetails.additionalInfo.split(','),
      tag: productDetails.tag.split(',')
    };

    try {
      const response = await axios.post(`${baseUrl}/api/product`, productData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setIsImageUploaded(false);
      navigate('/products')
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleImageUpload}>
        <label>Featured Image:
          <input type="file" onChange={e => setFeaturedImage(e.target.files[0])} />
        </label>
        <label>Gallery Images:
          <input type="file" multiple onChange={e => setGalleryImages([...e.target.files])} />
        </label>
        <button type="submit">Upload Images</button>
      </form>

      <form className="product-form" onSubmit={handleProductSubmit}>
        <label>Name:
          <input type="text" value={productDetails.name} onChange={e => setProductDetails({ ...productDetails, name: e.target.value })} />
        </label>
        <label>Category:
          <select value={productDetails.category} onChange={e => setProductDetails({ ...productDetails, category: e.target.value })}>
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </label>
        <label>Brand:
          <select value={productDetails.brand} onChange={e => setProductDetails({ ...productDetails, brand: e.target.value })}>
            <option value="">Select Brand</option>
            {brands.map(brand => (
              <option key={brand._id} value={brand._id}>{brand.name}</option>
            ))}
          </select>
        </label>
        <label>Standard Price:
          <input type="number" value={productDetails.standardPrice} onChange={e => setProductDetails({ ...productDetails, standardPrice: e.target.value })} />
        </label>
        <label>Company:
          <select value={productDetails.company} onChange={e => setProductDetails({ ...productDetails, company: e.target.value })}>
            <option value="">Select Company</option>
            {companies.map(company => (
              <option key={company._id} value={company._id}>{company.name}</option>
            ))}
          </select>
        </label>
        <label>Price by Company:
          <input type="number" value={productDetails.price} onChange={e => setProductDetails({ ...productDetails, price: e.target.value })} />
        </label>
        <label>Additional Info (comma separated):
          <input type="text" value={productDetails.additionalInfo} onChange={e => setProductDetails({ ...productDetails, additionalInfo: e.target.value })} />
        </label>
        <label>SKU:
          <input type="text" value={productDetails.sku} onChange={e => setProductDetails({ ...productDetails, sku: e.target.value })} />
        </label>
        <label>Tags (comma separated):
          <input type="text" value={productDetails.tag} onChange={e => setProductDetails({ ...productDetails, tag: e.target.value })} />
        </label>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
