import React from 'react';
import { Alert, Space } from 'antd';
const SuccessAlert = ({open}) => {
    if(!open) return null
    return (
        <div>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >
                <Alert message="Пароль успешно был отправлен вам на почту" 
                type="success" 
                showIcon  
                closable/>
            </Space>
        </div>

    );
};

export default SuccessAlert;