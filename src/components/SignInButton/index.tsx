import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signin, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
  // verificar se o usuarioo está longado
  const [session] = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signin('github')}>
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}
