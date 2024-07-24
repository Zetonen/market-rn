import React, {useEffect} from 'react';
import TabNavigation from './navigation/TabNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsAuthenticated} from './store/dataSlice/authSlice/selectors';
import AuthenticatedStackNav from './navigation/AuthenticatedStackNav';
import {AppDispatch} from './store';
import {refreshUser} from './store/dataSlice/authSlice/operations';

const Entrypoint = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <>{isAuthenticated ? <TabNavigation /> : <AuthenticatedStackNav />}</>;
};

export default Entrypoint;
