import { Alert, Space } from 'antd';
const ErrorAlert = () => (
  <Space
    direction="vertical"
    style={{
        marginTop: '100px', 
        width: '100%',
    }}
  >
    <Alert type="error" message="Error validating credentials" banner />
  </Space>
);


export default ErrorAlert;