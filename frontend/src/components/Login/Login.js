import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    try {
      // Perform login API call with username and password
      const response = await axios.post('http://localhost:3001/login', {
        email: username,
        password: password
      });
  
      if (response.data) {
        alert('Login successful!');
        setUsername('');
        setPassword('');
        // Redirect to search page
        window.location.href = '/search';
        // Clear username and password fields
        
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to login. Please try again.');
    }
  };
  

 


  return (
    <div className="login-container">
      <img src="" alt="Login background" className="login-background" />
      <div className="login-form-wrapper">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABHEAABAwIDAgoGCAMGBwEAAAABAAIDBBEFEiExQQYTIlFhcXKBscEUIzJCkaEVJDNSYoKy8Ac00RdDRFNz8TdjZHSi0uEn/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAICAgMBAQAAAAAAAAAAAQIRAxITMSFBUSJh/9oADAMBAAIRAxEAPwDx0OB0unIuk9l9d6gCW7VWDPbpdDBKK7UKFkJTapJ0rI2QuldOEkCF7JApwkgYlPcp7JwEES4ga6BOZQbC1vNTbHxjXDYrdZg9XQmE1kEkIeM7OMFs7ecdCxbF0pXPMlcqbhyio2WvpDXKVzzKVk1kTZsx5gmLipWUSEVEvKiXmymQoEIBlyYaqRCTBcoJsaXODWi55lca+CjF3ATVG4e63r5z0IEdwLMFjvO8obozxltUE5ppKh5klJc470lqYBwexDHq11Hh0DpJWMzuGyw6UkFMhDcFYy8kd3ghub4BViqr+T3qI8rok42d6gByj1IpJbk52Jtw7kXZzoB1pEcoDpTnaOtOfbHWUNoj3uhO3W/Wpge0epRj2P60Nm1ygqQGvcntyG9ylbldyJseABlNLNmGdj2ZWc9/6LSxvhTiOPClZiJD20zcjMoAIHwWRa2oTMGrutZ6r2M43uQm5ulSa28Z6ypBvs9XkVpm1CxSI9roRS3ak1l81+dADWzTzpG9x0ouXkR93gkW8od6LsA7VEopbr+YeCi5qjSu5SgGZ9knjVEpG3lt0hSkXaKmdNKxjRq5wHxK9i4Gfwzo3xMxDFCH5wHNjHN0rzrg5TA1sVx/eM/WvpLDIwygpwBYCNqmPsriuC9FT0H8T8fhooRDEyip7MZoN6dHwa39qPCG9v5Kn3DnKS0PAWt5I7vBQcNnd5qxGOS3u8FDKNPy+a0xWfUjQKFuUeoI1YLNb1HwCFa0juyPEKGiO9K3s9ycjQp7as7kXRnbusJ/fHWfApzu7Q8U5HrR1nwKJSA0d3KMQ0d2kVo5Lu7zUYhdr+1ZFhW5EfU3yUw3l939Eg27Y+pnkiAesPZPiENGDdijENHdaOAoxN0d2kQONvqz1uRAzlM/e4qUbfVOPS5FLeXH+/dSAIYnDNHfvcrGVMGcl373K0V8nq4upvglIzljvR8vIh/J4BKRnLb3qLFJzeUe15KLmo7m8o9oeCZ7dEaUJBqiYeL1De0FGQalGwwfWmdoLNWOy4Ls+uxduP8AWvoaj5NLEB91q8A4MN+vRH8bP1r36DSljuPcb0/18FnH2Vx+Bn/9T4Q6X+p0+wnp5iko4LcfxU4Q/wDZ0+/tc90ltHhsY5DO7wULbPy+aOwchvd4IEjg0NubaDzWmKo1w5LeyfAIRHLf2R5IlY4Oay3N5BQLSC8n7o/fyWdiJGimBqzrCWUuBspZS17QRqC1U2i4ajtDxUretHWfApHd1jxUv75nWfAoEByX93mmgHJf20Ro5L+seajTDkydvyRqRNo5MXTk8kQD1h7J8QmA5EJ6I/JEA9aeyfEIhBqULdHdpEaE1ONH9tBCJv1cn8TvFGy8uPp/9SoQ/wAse0/xKL70X790qxKe21IDR373KV9FEuAzdfklELDi4T2PAJP+0Z3oLprRwjoafkEzZc0je9RZEHXznT3x4J3tuFepII31EYmsWSSWOti3crn0Y11VxVOwy5b7/aXLLlkunbHiyy+Y5eUcsjpRcKF6tvaHmtPH4aalLKVrc1Sy7pHsNmi/u232VDCo3CoZIWkMLwLnRXtuM3Gy6dtwY/nIhzvZ+pe+QWFPFa3sN1O399y8F4Mi1bD22fqC96gJ9Hj1tdjdv+4TFK4zBr/2pcINv8lT6kdrqSTYP/xVx6wJBoqfZ+bmBTLbLxSL7Nnd4LKxZ5YYmgm1lrRfZs6h4LKxgX4v4LSKWa9rq20ZmX51U0LhZWadxdeI6t9rqt/uudXQkAuBbaTZHe0cbfptqhMtG0yDbc5R0KeY6PI1NrBSU0A4aN7YHzUiPXM6z4FM/Y3T3x4qZ+2j6SfArZIk0e33eahTDkydvyRGa57ajk6/FQpdknbRRh9lF1M8kT+97j4hDbYxR9lnkiX9aB+E+IVYEG1Qp/f7fkna6+xQhdZr+15Ip4j6h/bcpl9nRfvcVXY60br/AHnJy72OryQHMiE6T2utCL9NqGX3D9f3ZRYC5zi1m3QDwWnTwQyshdFKWyZi2QPtbrCzQL5ObRXoGBsrDY71jKX6bxsl+RAXtnadLNft5tLrrsDlikqRJGWtkAykHY4arlmuaXvvfbsWvgAb6Q0tcGgvNxa5Gi8nNPjb28FnpRxHD4vS3gU5hlEhIjvfO0nR10CQRR4mRxEgIc1rQ7QNFl1OO1UMTXslD42NYQx1gHEjZYrhMLP1zNrcvG3adVriyuWPyxzaxuo7jg2PrkPbZ+oL3qlFqaPd6tu7o6wvCuDtvTYe2z9S92pLGnju15ORuxt9y9GDy5+3EYUQP4q46XO/wUG0j8XOUynhV/7VsdsHfyVPsafxJLow8Tj+zZ1N8Fm4uzMxthsN/FabPs2dTfBZ2JPAs08ybRnGPi2g8+5WIHNa7Xmt8VXkfmDW3RHNaH2Dxs+alaGElmt7yVGSe5aeayHUsEcEDmkFz81xfZY2UqSKGQxifOc+oDTbYpILeGzUfpA9PZnjBG+1l3dFgGFPdFKaIva8ZmB9xmBG7WywcX4LUlDgNJidNPLxk0ojfE7UC99i6vg4+rNBLheNZeLyh8FS3lAX2Dn0+Sl2RS4Y4Ph0VHRS0FM2AZy17Q3Keo/NcvNR0zNI2EZy3Nrz7V6BIaiuw6owXE3xDNY01bGC9uhuL7wfI71xtVhuI01RxUlHM+wvnhYXtcN1iFZVUqeniZTBz2BwFMXa/e1t4IFK+OduV0I2DlDn3+CLK+WGkdFLFJG/iy3K9pafmqmHiTMeKje8DUhrSbK7jOmjT08M7WSGMCzjfpG5WZaKiblEcADnubpfdzoEMFXHTua2mqDe4HqjfX/dH4rEGmAuw+sORuvqH8/Urs0VHh1MY7via5vFOBuNrtdVTpfQqmCAvgbmsLuBKJJiJpmFs0b4nHNZr2Fp+fWsCCoe0iKC5dbRjRmPwCGmlVjD6YZnB7tdGg7RvV3DsJo8Rp3uikZE+2nGuIBPddYTsLxV4Ljhldr/ANO/+i6bg/Rvo6oSYg2oijA1yNeOsXtopaaWafgRWvcx0ccc8YlF3Qyh1gdl1hTx8TXSxWN4pZGEc1iQvRIuGPB/CKaqkztqatkV4HMH234XdI3g3XNYTVYHi+I1H0ph8scs73yCaCUm7nEkmx60lNOdzkPdqdXgdXJXW8BcGpsXxWOKtkmawi44t+UlZmPYJR0AiqKWtkdTy1LohxzBma5jRfZtGqDQ41JhtnUk+SSMW4xsZ0HPtWM5HTG0PhhhFTS8KsTwxs0ksVPU5WcYS4kOaCCe4hYkMMlDib6ecDjIpAHWO9dNiOM0eK0ToZqxsdU+obPJVSRHNYC1r7ddFiYlDRtqn1dNicFQ6R7TxUbHAt7zopPS2f667g68emw/6jP1Be202I0kUbYZp4mvDGXa42tp1L54wvEBT1EL3bGvaT3EFXcb4W1FRiL56fLG0ta3IC4XsBzFJ8M5PRsNq6IfxQxqZ1TTiE0cLWvL25SRmuBdJePS4w5875nsPGP9pzZTrbrCS3tlAutH1Nb4LAr6gzzaXFtFtvPq/wArfBc5MC2VwI1utCbXstym3Us8Z2tugk6JAiylBnlrmgDQhHgfkdASL2v4qqCLqxDtivs18VB1DuEXp4hpJ4CIKK74hm9p/O5Hj4WPaHZWWa0NI5zqCQuVhtnlkz5cxIsBdJjByvWaDo2pVdzTcLXOa0EbXF5t93UjyRo+G00DXZxctiDzbe7mXJUz8NYwGR8z3AaA8lHE9ISSyiMgO86rOh1NVw9hxqijwurpmhs73cdM5odZm4C+/Zqud4Q184ZSx0MQp8OYCQ2F2UuvocxGuxDjqGNIyYeAB0AKliTqmoJZHAWMsLNziwO/RNDoMAx6IGd0zZpGNiHEtLrua/TUb9LLpJeG9RRYQS4A1DmPDJQLkWbyTrvufkvMKQ1lDLxrIruGzeOlahxGSsp3wVFHka4Wu06jquszDV233utPRKnh3TzYVFDjOFxVUUkghmZIweyW3zAc+xZPA3H8OwBmNmmhfIyJ4dTB51LfukrENXTVYHpMGtm32jUCwKh6NSAP4njG8Z7dnbfitMPRZ/4imGSYcTdkXFuBudWuOo7kzuHQrGCOe+USObpvaL28AvM5oTxrWSVZ5bdhaDohZOLI+tuBG/KFdDqayXg3VsdNVYLE+d1IJzlJaS7muFmeiYdDiFDU4WJY6epaXCKR2YssbaHeFkm1gTVvtbKRkGxGjkMVRSN47OxjXW0ta5VGhwplH0NR63H0lUbeyFzBlbxMoB3DxWzj0wkwemF9PTZj8QFgPcA0gb9qsSocZ6io6mn/AMghUptMQf3qnPsyAb2+YUKc+tS+jbXjdyW9RWc+W9RtP7Cth/shZub6wOoeCzFW81wkoAg7UkG85ga2+UbLLnKulmkqXuY0annW6ZXFgykDrKpvdlfy3KdmpizPo6rP9180/wBF1f8AlfNazKmnYLuqLH5qL8Vp2/5r+mwF1O2X411x+6zmYRXP9mIH8wVh+F14ihDIHZgDcgjnU3Yvb7Km15zJfwTjG64DkPbGOYC/jdN5prD9BZg+LP8AYp5HdRCl9B4yP8JL8kT6axM7K2QdVh5JDFMUdqK2c/mTeR/Af0Jizv8ADl35gFCHBMUlL+LgJLHZXcsaHbzqb67EZD6yqnP5yhQVdazMYqiVpc4klrzqrLU/kePBcYfI+OOF7nR2zASDS+o3p/oXGQ4NMT2lxsA54F0JtbX8a4iplzOtmJeblaMGIYndpdUyuDfZu69tE3kfyr0uB41UsD4IXvad/GgKw/g1whYOVSy3/DK0+avYXidQ1kbHv5PNlHOupoJ4ZWg8c9rxuZp8yueWeUdccMa4eLA8akLgylnlyHK4CUDKfii0uFYzJGJaagic0kjPK/MQQbbCfJegwxsa6aQP4wSPzXJvbQDbfoVXBMrIZmZpMzJ5BZp2cq/ms+XLXo8U24mTg9wnmeZH073dOdg+SYcGOEjtTRykc4c0r0mP0Vzr1EsrDzNbqrHHUDG+pifIfvSvss3ly/GvFi8wHBvHb5XQub0Oe0eKvRcEMTfl42QtHOLPA+C9Ecx0jQW1EeuxrHbECSmeXN452Vv3mMF/kp5qvijipODFU+MQVMk2SNziwNisHE2uehU5+CNTG27AXN6SLr0sMoI4m3qnvdf2XyFqrylkhIjkYwc7XB3ip5cl8ceVzYBOwkFhbpbU2VT6FrYzdsLiOe4XqszWm7RJGR02v8wsyajhEoLoDlO0tde63OWs3hjziRssLrSNIttVMWLr77L0GupaSTkcXk6X307lh1uAUx5VNWR3PObLpjyOeXHpzwNkytz4XUROtYPbuLSkt7jlqr2vFtJIOiz52uLiRcrQEYLBbmVaamBN72PWo0zSwAkjQ9KGWnnWl6OzY43Kj6PH94hXZqs619qm0aK82luNmZGZh1+YXTtDpVNsfJaedWPRXgXC0o6CNrWh7gAFdbBTEAZXvP4TZTtF6Vzwgk6VCON5YSAdHFdOKKIi5YGjruiU9FQsBzRZiTfVZvJIs4rXJCGYv9myvU9NUO2h1r7tV08ceGh+rGMP3WXuFcD6OLWMNad1wA5c7y/jrOFh4XhVQWMcLi49k6H5rpoqIU8Lc/GG41y62+SC7FI26Zi4fdeAfmpfSEcluLDIzv4sk3XO3LJuSQTZpGJS6+mY28lYoaeSISXaLOcXG3Kufihx1rtjXAjpsUonBshdnZEfvNNirFti42S4yh9hzZkZkVO4WkfYn3W6X+KozVYL/Vv43/UaFXlOmZ5Zr7rdVbGGxxcDbHiHttvOv/xJ1Q91mMMTB2gXLGZU2symzA/e3qwyZzbmtlJbzOAJPyWdaajSqGxGNpqeMLm97VVYxrszWTQtj233qlJiDGm0XGNYec5R3IT624Ox4/G0G3gVmtxo3jhNqcCQn332t3BClp43AuM5Ljty20+CyWgyk8W17unYERtK0DNK8dB3D+qSJUqmmMjS1sxt/wAy6o1WDTwsbI9he072ELSpWtMoEb5MpO3Np8F20+CCpwuKzfd221Xp48NvPyZ6eRVs5hNmRW7Q/okuhx/BDFIGDrF06343LyOPcSGiygQHDUJ0lGp7BkAaNBvRWwsIBsnSRb7NIeJPIA7xdWYXGSLM7b0JJLLcO9uRgcCddxKnFUyACxA6kkkqfZ6iokbAHh2pNkCOR8uj3Gx3ApJKNDkcW3kk6JmTveCCdiSSzWoNSvzyFrmiy04o2C3JGzekkshTTyxgZXm3NuUoZOOcM7GX5xcFJJFFlu1pIcbDcdQqfHOcCTa4SSVjIjKydjLNkIB2oriRFxlyXdOqSSqgelyv9vK4dIUwBYENAJ5gkks1qBS1U0Ty1jzlA2FHgf6S2PjgCSNuot1JJJPZk0KanZDUsc0uJzD2jdeuYRaXDIc7R7KSS9XG8fKwMbp4vpEjILWTJJLq4v/Z" alt="Login illustration" className="login-illustration" />
        <h2> Sign Up</h2>
        <form onSubmit={ handleFormSubmit}>
          <div>
            <label htmlFor="username">Enter your email:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label htmlFor="password">Enter your password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
        <button type="submit">Create an Account</button>
          <br></br>
          <a href="/search">Already have an account</a>

      
        </form>
      </div>
    </div>
  );
};

export default Login;
