function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function EventHandlerPassing() {
    return (
      <div>
        <AlertButton message="You clicked me!! (created by Alertbutton function)">
          Click me (passing down)
        </AlertButton>
        <AlertButton message="You clicked me!! (created by Alertbutton function)">
            Click me (passing down)
        </AlertButton>
      </div>
    );
  }