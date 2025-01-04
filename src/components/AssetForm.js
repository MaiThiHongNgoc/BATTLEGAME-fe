import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

function AssetForm({ onAssetAdded }) {
    const [assetName, setAssetName] = useState('');
    const [assetType, setAssetType] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newAsset = {
            name: assetName,
            type: assetType,
        };

        try {
            const response = await axiosInstance.post('/Asset', newAsset);
            onAssetAdded(response.data);
        } catch (error) {
            console.error('Error adding asset:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                placeholder="Asset Name"
                required
            />
            <input
                type="text"
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
                placeholder="Asset Type"
                required
            />
            <button type="submit">Add Asset</button>
        </form>
    );
}

export default AssetForm;
