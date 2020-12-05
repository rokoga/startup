import { useEffect, useState } from 'react';
import { WhatsappIcon } from 'react-share';

const Share = ({ text }) => {
  const [host, setHost] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setHost(window.location.origin);
    setMsg(window.btoa(text));
  }, [text]);

  return (
    <div>
      <a
        href={`whatsapp://send?text=${host}/wish?m=${msg}`}
        data-action='share/whatsapp/share'
      >
        <WhatsappIcon />
      </a>
    </div>
  );
};

export default Share;
