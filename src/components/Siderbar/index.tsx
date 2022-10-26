import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import coverImg from '../../assets/cover.jpg'
import { Avatar } from '../Avatar'

export const Siderbar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={coverImg} className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/48631681?v=4" />

        <strong>Alan Christian</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
