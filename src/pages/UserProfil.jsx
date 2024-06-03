import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/blog1.png'
import { FaEdit } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"

const UserProfil = () => {
  const [avatar, setAvatar] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  return (
    <section className="">
      <div>
        <Link to={`/myposts/sdfsdf`}> Mes Blogs</Link>

        <div className="">
          <div className="">
            <div className="w-[25%]">
              <img src={avatar} alt=''/>
            </div>
            <form className=''>
              <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
              <label> <FaEdit/> </label>
            </form>
            <button className=''><FaCheck/></button>
          </div>
          <h1>Délan Kotcho</h1>

          <form>
            <p>Message d'erreur</p>
            <input type="text" placeholder='Entrer le nom complet' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='Entrer l Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Entrer le mot de passe actuel' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder='Entrer le nouveau mot de passe' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder='Entrer confirmer le nouveau mot de passe' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type="submit">Mettre à jour mon profil</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfil