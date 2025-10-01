import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 relative overflow-hidden'>
      <div className='absolute top-0 left-1/4 w-56 h-56 bg-[#8B5CF6]/60 rounded-full filter blur-3xl animate-floating-slow -z-10'
      style={{ animation: 'floatingSlow 6s ease-in-out infinite' }}></div>
      <div className='absolute bottom-0 right-1/4 w-72 h-72 bg-[#22D3EE]/60 rounded-full filter blur-3xl animate-floating-reverse -z-10'
      style={{ animation: 'floatingReverse 8s ease-in-out infinite' }}></div>
      <h4 className='text-center mb-2 text-lg text-[#22D3EE]'>Let's Connect</h4>
      <h2 className='text-center text-5xl font-bold text-[#8B5CF6]'>Get In Touch</h2> 
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
      I'd love to hear from you! If you have any questions, comments or feedback, please fill the form below</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required 
          className='flex-1 p-3 outline-none border-[0.5px] border-[#22D3EE] rounded-md focus:border-[#8B5CF6] focus:shadow-[0_0_10px_#8B5CF6] transition-colors duration-300' name='name'/>
          <input type="email" placeholder='Enter your email' required 
          className='flex-1 p-3 outline-none border-[0.5px] border-[#22D3EE] rounded-md focus:border-[#8B5CF6] focus:shadow-[0_0_10px_#8B5CF6] transition-colors duration-300' name='email'/>
        </div>
        <textarea rows="6" placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[0.5px] border-[#22D3EE] rounded-md focus:border-[#8B5CF6] focus:shadow-[0_0_10px_#8B5CF6] transition-colors duration-300 mb-6' name='message'>
        </textarea>
        <button type='submit' 
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] hover:from-[#06B6D4] hover:to-[#8B5CF6] font-medium rounded-full mx-auto shadow-md transition-all duration-300'>
        Submit
        </button>
        <p className='mt-4 text-center'>{result}</p>
      </form>

      <style jsx>{`
        @keyframes floatingSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatingReverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
    `}</style>
    </div>
  )
}

export default Contact
