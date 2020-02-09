import React from 'react';
import classnames from 'classnames'

import { User } from "../../../../../types/github";
const styles = require('./styles.module.css')

interface Props {
  user: User
  isLoading: boolean
}

export default ({ user, isLoading }: Props) => (
  <a
    href={user.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className={classnames(styles.userTile, { [styles.loading]: isLoading })}
  >
    <img
      className={styles.avatar}
      src={user.avatar_url}
      alt={user.login}
    />
    <div className={styles.userLogin}>{user.login}</div>
  </a>
)
