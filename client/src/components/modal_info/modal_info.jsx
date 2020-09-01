import React from "react";
import { Modal, Button } from "antd";

export default class ModalInfo extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button color="#dd4823" onClick={this.showModal}>
          Información
        </Button>
        <Modal
          title="Información. "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="post_welcome_info">
            <p>
              A partir de ahora puedes empezar a <a href="/explore">explorar</a>{" "}
              y conocer nuevos amigos. ¿A qué estas esperando?
            </p>
            <p>
              Sigue a aquellos usuarios que publiquen historias o
              imágenes que te resulten interesantes o graciosas, así te saldrán
              en esta página y podrás leerlos más a menudo.
            </p>

            <p>
                Recuerda <a href="/profile">editar tu perfil</a>  para que el resto de usuarios puedan saber más sobre ti.
            </p>

            Por último y lo más importante, disfruta de tu estancia con nosotros!
          </div>
        </Modal>
      </>
    );
  }
}
