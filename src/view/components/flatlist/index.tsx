import React from 'react';

interface FlatListProps<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    keyExtractor?: (item: T, index: number) => string;
    ItemSeparatorComponent?: React.FC;
    getItemLayout?: (data: T[] | null | undefined, index: number) => { length: number; offset: number; index: number };
    onEndReached?: () => void;
}

export const FlatList = <T,>({
    data,
    renderItem,
    keyExtractor = (_item, index) => String(index),
    ItemSeparatorComponent = () => <></>,
    onEndReached = () => { },
    ...rest
}: FlatListProps<T>) => {
    const renderSeparator = () => {
        if (ItemSeparatorComponent) {
            return <ItemSeparatorComponent />;
        }
        return null;
    };

    const handleScroll = (event) => {
        if (onEndReached && event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
            if (typeof onEndReached === 'function') {
                onEndReached()
            }
        }
    };

    return (
        <ul onScroll={handleScroll} {...rest}>
            {data.map((item, index) => (
                <React.Fragment key={keyExtractor(item, index)}>
                    <li>{renderItem(item)}</li>
                    {index < data.length - 1 && renderSeparator()}
                </React.Fragment>
            ))}
        </ul>
    );
};