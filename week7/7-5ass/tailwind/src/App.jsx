
function App() {
 
  return (
    <div style={{display:'flex',justifyContent:'center'82 }}>

    <div id="container" style={{height:'500px', width: '400px',boxShadow:'0px 1px 2px 5px rgba(232, 203, 203, 0.1)' , textAlign:'center', justifyContent: 'center' }} >
      <div style={{backgroundColor:'#7df0f0' , height:'180px' , width: '400px' }}>
         <div>
        <img style={{height:'130px', width:'130px', borderRadius:'50%', marginTop:'120px'}} src="https://images.unsplash.com/photo-1761839258605-d1b118266ccc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      </div>
      <div style={{height: '150px', width: '400px', justifyContent: 'center' , alignItems: 'center' , marginTop: '70px'}}>
        <h2>RITA CORREIA <span>32</span></h2>
        <p>Paris</p>
      </div>

      <div style={{height: '120px', width: '400px', borderTop:'1px solid grey' , display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <h2>80K</h2>
          <p>Followers</p>
        </div>
        <div>
          <h2>803K</h2>
          <p>Likes</p>
        </div>
        <div>
          <h2>1.4K</h2>
          <p>Photos</p>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default App
