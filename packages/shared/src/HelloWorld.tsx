export type HelloWorldProps = {
    message: string
}

export const HelloWorld = (props: HelloWorldProps) => <p>Hello {props.message}</p>