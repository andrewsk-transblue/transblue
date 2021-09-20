
import { useEasybase } from "easybase-react";

function StoreMsg(message) {
    // /const [easybaseData, setEasybaseData] = useState([]);

    const {
      db
    } = useEasybase();

    db("CONTACT").insert({
        website: 'GC Website',
        name: message.name,
        phone: message.phone,
        email: message.email,
        message: message.message
      }).one();
}

export default StoreMsg;