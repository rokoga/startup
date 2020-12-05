import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LogoSvg from '../public/logo.svg';
import Share from '../components/share';

const Wish = ({ msg, edit = true }) => {
  const textareaElement = useRef(null);

  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (textareaElement.current) {
      textareaElement.current.focus();
    }

    if (msg) {
      setMessage(window.atob(msg));
    }
  }, [msg]);

  const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '30%',
  };

  const shareStyle = {
    marginTop: 20,
  };

  return (
    <div style={rootStyle}>
      <div className='card-sandbox'>
        <div style={logoStyle}>
          <LogoSvg />
        </div>
        <div className='card-sandbox-text'>
          {edit ? (
            <textarea
              ref={textareaElement}
              maxLength='80'
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className='card-sandbox-textarea'
              autoFocus
            />
          ) : (
            <p>{message}</p>
          )}
        </div>
        <p className='card-sandbox-footer-logo'>sand box</p>
      </div>
      {edit && (
        <div style={shareStyle}>
          <Share text={text} />
        </div>
      )}
    </div>
  );
};

export default Wish;
