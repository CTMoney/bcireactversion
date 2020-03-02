import React from 'react'

const Services = () => {
  return (
    <>
      <div id="servicesPage">
        <dl>
          <dt>
            <a href="#">Hardware Design</a>
          </dt>
          <dd>
            Our Design Engineers possess extensive experience designing Laserjet printers, mobile devices, and Medical Devices,
            for many Fortune 500 companies. Our team can architect and design your product to achieve the required design goals
              for bandwidth, interface, and computational performance. We are experts in all <a href="#">major interfaces</a> and
              will design all necessary logic to interface any circuitry. We are experts in <a href="#">Signal Integrity</a> which
            enables us to meet your products bandwidth and speed requirements.
            </dd>
          <dt>
            <a href="#">HDL Design</a>
          </dt>
          <dd>
            Our engineers are experienced in HDL languages and design flows using VHDL and Verilog. We have designed graphics
            and high speed interface ASICs and FPGAs for various customers.
            </dd>
          <dt>
            <a href="#">Layout and Manufacturing Services</a>
          </dt>
          <dd>
            Our team of Layout Designers and Electronic Technicians are able to turn the most complex designs into working
            hardware. Our combined 30 year experience in PCB Layout Design allows us to provide PCBs ranging from 18 layer
            complex FPGA designs to 4 layer motherboard designs targeted for low cost high volume production. We support most
            major layout and design tools such as: Altium, Mentor Graphics, Cadence/ORCAD, HyperLynx, SolidWorks.
            </dd>
        </dl>
        <hr />
          <a style={{display: "inline-block", float: "left"}} href="#">
            <img height="100px" title="Generic Link" src="https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/emblems/emblem-generic.png" />
          </a>
          <p style={{display: "inline-block", marginLeft: "1em"}}>
            Discuss your design requirements with an <a title="MailTo Placeholder"href="#">experienced design engineer</a>
          </p>
      </div>
    </>
  )
}

export default Services