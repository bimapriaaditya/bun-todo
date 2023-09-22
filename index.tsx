const server = Bun.serve({
    hostname: "127.0.0.1",
    port: 3000,
    fetch: fetchHandler,
});

console.log(`an aplication running on ${server.hostname}:${server.port}`);

type Todo = { id: number, name: string };
const todos: Todo[] = [];

async function fetchHandler(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "" || url.pathname === "/") {
        return new Response(Bun.file("index.html"))
    }

    return new Response("Not Found", {
        status: 404
    });
}

function TodoList(props: { todos: Todo[] }) {
    return (
        <ul>
            { props.todos.length
                ? props.todos.map((todo) => <li key={`todo-${id}`}>{todo.id}</li>)
                : "No todos found"}
        </ul>
    );
}