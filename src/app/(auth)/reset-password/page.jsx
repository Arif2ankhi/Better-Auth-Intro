import React, { Suspense } from 'react';
import ResetPasswordform from './reset-password-form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h2>Reset Password</h2>
            <Suspense fallback= "loading">
                <ResetPasswordform></ResetPasswordform>

            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;