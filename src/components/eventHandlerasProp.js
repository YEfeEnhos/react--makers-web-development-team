function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}> 

        Play "{movieName}"
      </Button>
    );
  }
  
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Movie
      </Button>
    );
  }
  
  export default function EventHandlerasProp() {
    return (
      <div>
        <PlayButton movieName="Recep İvedil 5" />
        <UploadButton />
      </div>
    );
  }