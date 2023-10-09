import { ServerAddress } from './urls';
import NotificationComponent from 'components/Notification/notification';


const ConnectServer = (URL: any, method: any, ContentType: any, Params: any, navigate: any, ...props: any) => {
    let headers = new Headers();

        headers.append("Content-Type", ContentType);
    return new Promise((resolve, reject) => {
        fetch((ServerAddress) + URL, {
            method: method,
            headers: headers,
            body: Params
        }).then((response) => {
            if (response.status === 401) {
                NotificationComponent.error("", "توکن شما منقضی شده است")
            } else if (response.status === 403) {
                NotificationComponent.error("", "شما دسترسی به این سرویس را ندارید")
                reject({
                    status: "FAILED",
                    message: { private: "شما دسترسی به این سرویس را ندارید", public: "شما دسترسی به این سرویس را ندارید", code: 403 }
                })
            } else if (response.status === 500) {
                NotificationComponent.error("", "سرویسی یافت نشد")
                reject({
                    status: "FAILED",
                    message: { private: "سرویسی یافت نشد", public: "سرویسی یافت نشد" }
                })

            } else if (response.status !== 200) {
                NotificationComponent.error("", "دوباره تلاش کنید")
                reject({ status: "FAILED", message: { private: null, public: "دوباره تلاش کنید" } })
            }
            else {
                response.json().then(function (data) {
                    resolve(data)
                });
            }
        }).catch((error) => {
            NotificationComponent.error("", "دوباره تلاش کنید")
            reject({ status: "FAILED", message: { private: null, public: "دوباره تلاش کنید" } })
        });
    })
}

export default ConnectServer

