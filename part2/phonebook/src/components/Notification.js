import React from 'react';

const Notification = ({ message, type }) => {
    const isNotificationSet = () => message !== null || type !== null;

    console.log(isNotificationSet());

    if (!isNotificationSet()) return null;

    return (
        <div className={type}>
            {message}
        </div>
    );
};

export default Notification;