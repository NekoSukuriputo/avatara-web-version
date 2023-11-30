const conversation = require('@/app/dataMocks/convertations.json')
export default function addMessage(id){
    conversation.find(item => item.id === id).messages.push(
        {
            "id": "d89psd89a9dus9sasasa",
            "sender": {
              "name": "Kobo Kanaeru",
              "image": "https://yt3.googleusercontent.com/Zi6DMbqTrk8jpNKnJgbw_NxGnggsKX1omQnPeHxrZTmrVmon7zfmg5Q4XbqsHO9AMidW49zCPw=s900-c-k-c0x00ffffff-no-rj"
            },
            "body": "Hellosasasas",
            "createdAt": "10.10"
        }
    )
}