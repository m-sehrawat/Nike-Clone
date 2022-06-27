import { Input, Text, VStack } from "@chakra-ui/react";
import { AuthBtn } from "./AuthBtn";

export const ResetForm = () => {

    return (
        <>
            <form>
                <VStack
                    w={['95%', '95%', '85%', '85%', '85%', '85%']}
                    mx={'auto'}
                    gap={'15px'}
                >

                    <Text
                        color={'gray'}
                        textAlign={'center'}
                    >
                        This feature is not available now, will be available in future, till then you can create a new account.
                    </Text>

                    <Input
                        type={'email'}
                        placeholder="Email address"
                    />

                    <AuthBtn value={'RESET'} />
                </VStack>
            </form>
        </>
    );
};