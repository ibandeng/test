import styles from './index.less';
import { Input } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.item}>
        <Input placeholder="123" />
        <Input placeholder="456" />
        <Input placeholder="79" />
      </div>
    </div>
  );
}
