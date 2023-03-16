export default function PreventDefault() {
    return (
      <form onSubmit={() => alert('Submitting!')}>
        <input />
        <button>Send</button>
      </form>
    );
  }


//   export default function PreventDefault() {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert('Submitting!');
//       }}>
//         <input />
//         <button>Send</button>
//       </form>
//     );
//   }
  