import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
<script src="https://kit.fontawesome.com/8dc2e58c68.js" crossorigin="anonymous"></script>
const { Title } = Typography;



const githubprovider = new firebase.auth.GithubAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} level={3}>
            omensuper1 Chat or Minh Dung Chat
          </Title>
          <Button
            style={{ width: '100%', marginBottom: 5 }}
            onClick={() => handleLogin(googleProvider)}
          >
            <i class="fa-google">Đăng nhập bằng Google</i>
          </Button>
          <Button
            style={{ width: '100%' }}
            onClick={() => handleLogin(githubprovider)}
          >
          <i class="fa-google">Đăng nhập bằng Github</i>
          </Button>
        </Col>
      </Row>
    </div>
  );
}
