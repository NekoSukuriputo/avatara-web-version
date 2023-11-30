const conversation = require('@/app/dataMocks/conversations.json')
export default function getConversationById(id){
    return conversation.find((item) => item.id === id) || []
}