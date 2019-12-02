import React from 'react';

const Notification = ({ message, type }) => {
    const isNotificationSet = () => message !== null || type !== null;

    if (!isNotificationSet()) return null;

    const notificationClass = `notification ${type}`;

    return (
        <div className={notificationClass}>
            {message}
        </div>
    );
};

export default Notification;