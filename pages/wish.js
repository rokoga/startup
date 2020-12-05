import Wish from '../components/wish';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WishPage = () => {
  const router = useRouter();
  const { m } = router.query;
  return (
    <div>
      <main>
        <Wish msg={m} edit={false} />
        <Link href='/'>
          <button>Create Yours</button>
        </Link>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        button {
          text-transform: uppercase;
          margin-top: 20px;
          letter-spacing: 3px;
          border: none;
          padding: 20px;
          border-radius: 12px;
          color: white;
          background-color: orange;
          box-shadow: 0px 0px 3px #a06700;
        }
        button:focus {
          outline: none !important;
          border: none;
        }
        button:active {
          box-shadow: 0px 0px 5px #a06700 inset;
        }
      `}</style>
    </div>
  );
};

export default WishPage;
