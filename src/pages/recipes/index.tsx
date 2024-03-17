import React from 'react';
import styles from '@/common/index.css';
import { NavBar } from 'antd-mobile'
import { Card, Toast, Button,SearchBar } from 'antd-mobile'
import { AntOutline, RightOutline } from 'antd-mobile-icons'
import yayJpg from '../../assets/a.jpg';
import User from './components/list'

export default function Page() {
  const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
  }

  const onBodyClick = () => {
    Toast.show('点击了卡片Body区域')
  }
  return (
    <div className={styles.body}>

      <div className={styles.top}>
        <NavBar>定制食谱</NavBar>
      </div>
      
      <div className={styles.content}  style={{ padding: '0.4rem' }}>
        <SearchBar
            placeholder='请输入内容'
            style={{ '--background': '#ffffff','--border-radius': '10px' }}
          />
          <div style={{ marginTop: '0.4rem'  }}> </div>
          <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              今日饮食分析
            </div>
          }
          extra={<RightOutline />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '10px' }}
        >
          
        </Card>
        <div style={{ marginTop: '0.4rem'  }}> </div>


        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              活力早餐
            </div>
          }
          extra={<RightOutline />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '10px' }}
          bodyStyle={{padding:'0'}}
        >
          <User></User>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>
     
          </div>
        </Card>

        <div style={{ marginTop: '0.4rem'  }}> </div>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              营养午餐
            </div>
          }
          extra={<RightOutline />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '10px' }}
          bodyStyle={{padding:'0'}}
        >
          <User></User>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>
     
          </div>
        </Card>

        <div style={{ marginTop: '0.4rem'  }}> </div>
        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntOutline style={{ marginRight: '4px', color: '#1677ff' }} />
              简约晚餐
            </div>
          }
          extra={<RightOutline />}
          onBodyClick={onBodyClick}
          onHeaderClick={onHeaderClick}
          style={{ borderRadius: '10px' }}
          bodyStyle={{padding:'0'}}
        >
          <User></User>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>
     
          </div>
        </Card>

        {/* <User></User> */}
        {/* <img src={yayJpg} width="388" /> */}
      </div>
    </div>
  );
}
