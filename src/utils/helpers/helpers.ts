import { Alert, Share } from "react-native";

const helpers = {
    shareMessage: async (content: string) => {
        try {
            const result = await Share.share({
                message: content,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    //
                } else {
                    //
                }
            } else if (result.action === Share.dismissedAction) {
                // dismiss
            }
        } catch (err) {
            Alert.alert("Have Error")
        }
    },
    authErrorCodeMessage: (authCode: string) => {
        switch (authCode) {
            case "auth/wrong-password":
                return "รหัสผ่าน ไม่ถูกต้องนะค่ะ , กรุณายืนยันใหม่อีกครั้ง";
            case "auth/invalid-email":
                return "อีเมล์ ไม่ถูกต้องนะค่ะ , กรุณายืนยันใหม่อีกครั้ง";
            case "auth/user-not-found":
                return "ไม่พบรายชื่อผู้ใช้ ในระบบนะค่ะ";
            case "auth/too-many-requests":
                return "เกินกำหนด จำนวนการ เชื่อมต่อฐานข้อมูล";
            case "auth/no-current-user":
                return "ไม่พบรายชื่อผู้ใช้ ในระบบนะค่ะ"
            default:
                return "เกิดข้อผิดพลาด , รบกวนลองใหม่อีกครั้ง"
        }
    },
    



}

export default helpers;