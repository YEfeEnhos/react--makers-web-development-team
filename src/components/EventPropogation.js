export default function EventPropogation() {
    return (
      <div style={{backgroundColor:"green", lineHeight:"50px"}} onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={ () => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }

//  function Button({ onClick, children }) {
//     return (
//       <button onClick={e => {
//         e.stopPropagation();
//         onClick();
//       }}>
//         {children}
//       </button>
//     );
//   }
  
//   export default function Toolbar() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <Button onClick={() => alert('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }
  