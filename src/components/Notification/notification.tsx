
import { notification } from "antd";

class NotificationComponent {
    
    static info(text: String, title: String, duration = 3000) {
        notification.info({
            message: title,
            description: text,
            placement: 'bottom',
        })
    }
    static success(text: String, title: String, duration = 300) {
        notification.success({
            message: title,
            description: text,
            placement: 'bottom',
            className: 'successNotification',
        })
    }
    static error(text: String, title: String, duration = 300) {
        notification.error({
            message: title,
            description: text,
            placement: 'bottom',
        })
    }
}
export default NotificationComponent
