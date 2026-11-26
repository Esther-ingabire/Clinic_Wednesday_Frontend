export default function LibraryButton({buttonLabel,buttonAction}) {



  return (
    <>
    {/* <button onClick={HandleClick}>Sign In</button> */}
    <button style={{backgroundColor: "gray",color: "black", margin: "10px",padding: "5px",border: "1px solid gray",borderRadius: "5px",cursor: "pointer"} }
    onClick={buttonAction}>{buttonLabel}</button>
    </>

  )
}
