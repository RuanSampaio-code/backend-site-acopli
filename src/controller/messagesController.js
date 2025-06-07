
import { db } from '../config/firebase.js';

class MessagesController {

    static async listMessages(req, res) {
       
        try {
            const snapshot = await db.collection('messages').get();
            const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.status(200).json(messages);
        } catch (error) {
            console.error('Erro ao buscar mensagens:', error);
            res.status(500).json({ error: 'Erro ao buscar mensagens.' } );
        }
    }

    static async sendMessage(req, res) {
        
        try {
            const data = req.body;
            const docRef = await db.collection('messages').add(
            data);

            res.status(201).json({ id: docRef.id, ...data });

        } catch (error) {
            console.error('Erro ao salvar no Firebase:', error);
            res.status(500).json({ error: 'Erro ao salvar dados.' });
        }
    }
    
}

export default MessagesController;