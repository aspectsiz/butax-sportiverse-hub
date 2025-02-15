// src/lib/api.ts
import axios from 'axios';

// Localde geliştirme yaparken bu adresi kullanın
const LOCAL_API_URL = 'http://localhost:8000/get-cards.php';

// Web hosting'e yüklediğinizde bu adresi kullanın
const PRODUCTION_API_URL = '/get-cards.php';

// Ortamı kontrol ederek doğru API URL'ini seçin
const API_URL = process.env.NODE_ENV === 'development' ? LOCAL_API_URL : PRODUCTION_API_URL;

interface CardData {
    title: string;
    description: string;
    image: string;
    headerContent: string;
}

const getCardData = async (cardId: number): Promise<CardData | null> => {
    try {
        const response = await axios.get<CardData>(`${API_URL}?id=${cardId}`);
        return response.data;
    } catch (error) {
        console.error(`Card ${cardId} için API isteği başarısız oldu:`, error);
        return null;
    }
};

export { getCardData };