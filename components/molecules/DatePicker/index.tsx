import { DatePicker, Space } from 'antd';

interface IDatePicker {
  onChange: Function;
}

function DatePicker({ onChange }: IDatePicker) {
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Space>
  );
}
