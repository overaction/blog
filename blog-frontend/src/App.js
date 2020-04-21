import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
    return (
        <Fragment>
            <Route component={PostListPage} path={['/@:username', '/']} exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register" />
            <Route component={WritePage} path="/write" />
            <Route component={PostPage} path="/@:username/:postId" />
        </Fragment>
    )
}

export default App;

// PostListPage 처럼 path에 배열을 넣어주면 여러개의 경로를 한번에 설정할 수 있다
// /@:username 처럼 @을 사용하면 http://localhost:3000/@kmc 에서처럼 kmc를 username 파라미터로 읽을 수 있다