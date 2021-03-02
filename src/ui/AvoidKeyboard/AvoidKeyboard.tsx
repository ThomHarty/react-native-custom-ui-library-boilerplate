import * as React from 'react'

import { KeyboardAvoidingView, Platform } from 'react-native'

const AvoidKeyboard: React.FC = ({ children }) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            {children}
        </KeyboardAvoidingView>
    )
}

export default AvoidKeyboard