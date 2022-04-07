import { Form, Input, Button, Checkbox, Select, DatePicker } from 'antd';
import { useCallback } from 'react';

const { Option } = Select;

interface PersonFormProps {
  onFinish: Function;
  onFinishFailed: Function;
}

export const PersonForm = ({ onFinish, onFinishFailed }: PersonFormProps) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: 'Please select your gender!' }]}
      >
        <Select style={{ width: 120 }}>
          <Option value="male">male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="date-time-picker" label="DatePicker[showTime]">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
