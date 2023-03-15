import React from 'react'
import ReactModal from 'react-modal';
import { IoPeople, IoClose } from 'react-icons/io5'
import Register from '../Members/Register'
import Login from '../Members/Login'
import './ModalClass.css'

class RegisterModal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
    
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div> 

        <button onClick={this.handleOpenModal} className='flex items-center bg-slate-700 rounded-3xl lg:rounded p-2 focus:bg-slate-700 focus:text-red-700 hover:text-red-800 hover:bg-slate-600 hover:duration-300 hover:scale-105 '>
              <IoPeople className='text-2xl lg:mr-2' />
              <span className='hidden lg:block'>Connexion</span>
          </button>

          <ReactModal 
             isOpen={this.state.showModal}
             onRequestClose={this.handleCloseModal}
             ariaHideApp={false}
             className='modalClass'
             overlayClassName="Overlay"
          >
            <div className='flex justify-between'>
              <div className='bg-gray-100 w-1/3 text-left p-2 font-bold text-gray-400'>Promo-parrain.com</div>
              <button onClick={this.handleCloseModal} title="Fermer" className='m-3 p-0.5 hover:bg-slate-200 hover:rounded-full'><IoClose className='text-2xl'/></button>
            </div>
            <Login CloseModal={this.handleCloseModal} />
           
          </ReactModal>

        </div>
      );
    }
  }
  
  const props = {};


export default RegisterModal