import React, { useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcHome } from 'react-icons/fc';
import { motion } from 'framer-motion';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success('Profile details updated');
    } catch (error) {
      toast.error('Could not update the profile details');
    }
  };
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}

            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && 'bg-red-200 focus:bg-red-200'
              }`}
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-blue-600 hover:text-blue-700 transition ease-in-out duration-200 ml-1 cursor-pointer font-semibold"
                >
                  {changeDetail ? 'Apply change' : 'Edit'}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-red-600 hover:text-red-800 font-semibold transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            whileHover={{ scale: 0.8 }}
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Sell or rent your home
            </Link>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Profile;
