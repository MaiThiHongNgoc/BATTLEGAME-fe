import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

function AssetList() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchAssets = async () => {
            try {
                const response = await axiosInstance.get('/Asset');
                setAssets(response.data.$values || []);
            } catch (error) {
                console.error('Error fetching assets:', error);
            }
        };

        fetchAssets();
    }, []);

    return (
        <div>
            <h2>Assets</h2>
            <ul>
                {assets.map(asset => (
                    <li key={asset.assetId}>
                        {asset.assetName} - {asset.levelRequire}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AssetList;
