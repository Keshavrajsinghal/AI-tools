import { Heading } from '@/components/heading'
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import React from 'react'

const ConversationPage = () => {
    return (
        <div>
            <Heading
                title="Conversation"
                description='Feel free to chat!'
                icon={ChatBubbleIcon}
                iconColor='text-violet-500'
                bgColor="bg-violet-500/10"
            />
        </div>
    );
}

export default ConversationPage
