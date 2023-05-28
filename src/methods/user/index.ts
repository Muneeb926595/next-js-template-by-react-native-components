export const transFormProfileObjectToUser = (data: any) => {
    const transformedData = {
        success: data?.success,
        user: {
            profile: {
                name: data?.user?.name,
                email: data?.user?.email,
                profileId: data?.user?.profile?._id,
                ...data?.user?.profile
            },
            id: data?.user?.id,
        },
    };
    return transformedData;
}