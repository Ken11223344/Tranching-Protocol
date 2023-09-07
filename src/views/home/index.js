import { useState } from "react";
import "../style.css";

const HomeView = () => {
  const [index] = useState(0);
  const [index_, setIndex_] = useState(0);
  const [pools_o, setPools_o] = useState({
    value: 0,
    text: "About",
    num: 14,
  });
  const [openPools, setOpenPools] = useState(false);
  const [openPools_, setOpenPools_] = useState(false);
  const [text, setText] = useState('50K');
  const Sequence = ({ num }) => {
    const elements = [];
    const maxElements = Math.min (num,18)
    for (let index = 0; index < maxElements; index++) {
      elements.push(<p key={index}>{index + 1}</p>);
    }
    return <div>{elements}</div>;
  };
  const changeTab = (num, key, value, text) => {
    setPools_o({
      ...pools_o,
      value,
      text,
      num,
    });
    setOpenPools(false);
  };
  return (
    <section className="HomeView">
      <div className="container topContainer">
        <div className="top">
          <div className="text">
            <h1>
              Tranching Protocols:{" "}
              <span>AI Powered AMM Liquidity Services</span>
            </h1>
            <p className="des">For Decentralised Derivatives</p>
            <div>
              {/* <button>Embrace Tranching Now</button> */}
            </div>
          </div>
          <div className="imgs">
            <img src={require("../../static/images/Vector.png")} alt="banner" />
          </div>
        </div>
        <div className="Ecosystem">
          <div className="imgs">
            <div className="title">
              <button className="title_btn">Tranching Ecosystem</button>
              <p className="line"></p>
            </div>
            <div>
              <img
                src={require("../../static/images/Content Wrap _ Tranching The World.png")}
                alt="Ecosystem"
              />
            </div>
          </div>
          <div className="text">
            <h2 className="title">
              Tranching <span>Derivates</span> Ecosystem {"{"}
            </h2>
            <p className="des">
              Tranching Protocol is an innovated Defi Protocol introduces
              Tranching Pool as an ultimate solution for investment managers to
              manage risks and earnings as well as provide liquidity for
              different DeFi products including Perpetual swap, RWAs, Options,
              etc.
            </p>
            <p className="t">
              <span className="FDC642">Bullet</span>{" "}
              <span className="ffffff">Points of</span>{" "}
              <span className="A4CF27">Tranching</span>
            </p>
            <ol>
              <li>
                Tranching Protocol is Governed by{" "}
                <span className="A4CF27">Tranching DAO</span>
              </li>
              <li>Tranching Pools</li>
              <li>
                Tranching DEX - Perpetual DEX based on{" "}
                <span className="FDC642">opBNB</span> and{" "}
                <span className="FDC642">EVMs</span>
              </li>
              <li>Tranching Swap - Swap Aggregator</li>
              <li>
                Tranching <span className="DBA0DB">Derivatives</span>
              </li>
              <li>
                Staking Liquidity is{" "}
                <span className="FF5857">transferable</span> and{" "}
                <span className="FF5857">restakable</span> on Derivatives
              </li>
              <li>
                AI powered Tools to provide{" "}
                <span className="FDC642">best yield income</span> for LPs
              </li>
              <li>
                Tranching Protocol{" "}
                <span className="A4CF27">Token Utilities</span> and{" "}
                <span className="A4CF27">Tokenomics</span>
              </li>
            </ol>
            <p className="world">#Tranching The World {"}"}</p>
          </div>
        </div>
      </div>
      <div className="container Pools">
        <div className="tops">
          <button className="title_btn">Tranching Pools</button>
          {/* <p className="code_">
            <code>
              <span className="FF5857">Print</span>("Hello World")
            </code>
          </p> */}
          <div className="content">
            <div className="sequence">
              <Sequence num={18} />
            </div>
            <div className="box">
              <div className="tab">
                <div className="tab_top">
                  <span
                    className="box active"
                    onClick={() => {
                      setOpenPools(!openPools);
                    }}
                  >
                    {pools_o.text}
                    <img src={require("../../static/images/sel.png")} alt=""/>
                  </span>
                  <div className="list pcList">
                      <span
                        className={pools_o.value === 0 ? "active" : ""}
                        onClick={() => {
                          changeTab(26, "pools_o", 0, "About");
                        }}
                      >
                        About
                      </span>
                      <span
                        className={pools_o.value === 1 ? "active" : ""}
                        onClick={() => {
                          changeTab(34, "pools_o", 1, "Risk & Earnings");
                        }}
                      >
                        Risk & Earnings
                      </span>
                      <span
                        className={pools_o.value === 2 ? "active" : ""}
                        onClick={() => {
                          changeTab(21, "pools_o", 2, "Investment Direction");
                        }}
                      >
                        Investment Direction
                      </span>
                    </div>
                  {openPools ? (
                    <div className="list">
                      <span
                        className={index === 0 ? "active" : ""}
                        onClick={() => {
                          changeTab(26, "pools_o", 0, "About");
                        }}
                      >
                        About
                      </span>
                      <span
                        className={index === 1 ? "active" : ""}
                        onClick={() => {
                          changeTab(34, "pools_o", 1, "Risk & Earnings");
                        }}
                      >
                        Risk & Earnings
                      </span>
                      <span
                        className={index === 2 ? "active" : ""}
                        onClick={() => {
                          changeTab(21, "pools_o", 2, "Investment Direction");
                        }}
                      >
                        Investment Direction
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="tab_text">
                  <div
                    className="item"
                    style={{ display: pools_o.value === 0 ? "block" : "none" }}
                  >
                    <h2 className="title">{"{"}[Tranching Pool]</h2>
                    <div className="row">
                      <div className="col imgs">
                        <img
                          src={require("../../static/images/OBJECTS2.png")}
                          alt="OBJECTS2"
                        />
                      </div>
                      <div className="col text">
                        <ul>
                          <li>
                            <span className="FDC642">Tranching Pool</span> is an
                            automated liquidity market making pool open to all
                            users by Tranching Protocol.{" "}
                            <span className="FDC642">Tranching Pools</span> is a
                            completely new concept in the blockchain space.
                          </li>
                          <li>
                            It is essentially a series of staking pools used to
                            hold web3 assets of different risk levels.{" "}
                            <span className="A4CF27">
                              Depending on the user's different risk
                              preferences, different returns are earned.
                            </span>
                          </li>
                          <li>
                            When depositing funds to provide liquidity,
                            investors can choose{" "}
                            <span className="FF5857">Superior</span> or{" "}
                            <span className="FF5857">
                              Inferior strategy direction
                            </span>{" "}
                            according to their own investment preferences, while
                            liquidity provision is based on the{" "}
                            <span>AI AMM</span> mechanism, assisted by a cession
                            mechanism on the local contract, the user does not
                            have to bear the cost of contract execution (Gas) of
                            this process.
                          </li>
                          <li>
                            <span className="FDC642">
                              The flexible strategy's
                            </span>{" "}
                            <span className="E72D9F0">tranching pool</span>{" "}
                            <span className="FDC642">
                              {" "}
                              is designed to underpin the entire{" "}
                            </span>{" "}
                            decentralized financial product ecosystem{" "}
                            <span className="FDC642">based on the</span>{" "}
                            <span className="A4CF27"> tranching protocol</span>.{" "}
                            <span className="DBA0DB">
                              {" "}
                              This ecosystem encompasses derivatives,
                              decentralized exchanges (DEX), and Real-World
                              Assets (RWA).
                            </span>
                          </li>
                        </ul>
                        <p className="f">{"}"}</p>
                      </div>
                    </div>
                    {/* <p className="code">
                      <code>
                        <span className="E72D9F0">var 1</span> = Tranching Pool
                        About
                      </code>
                    </p> */}
                  </div>
                  <div
                    className="item"
                    style={{ display: pools_o.value === 1 ? "block" : "none" }}
                  >
                    <h2 className="title">{"{"}[Risk & Earnings]</h2>
                    <div className="row">
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Capa_1.png")}
                            alt="Ecosystem"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; Tranching Pools balance the pool yields by
                            supporting{" "}
                            <span className="FDC642">
                              hedged derivative products
                            </span>{" "}
                            to minimise the{" "}
                            <span className="DBA0DB">
                              possible loss of LP funds
                            </span>
                            , such as Binary Options, etc. &gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Frame.png")}
                            alt="Frame"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; <span className="A4CF27">Tranching Pools</span>{" "}
                            provide options for{" "}
                            <span className="FDC642">different users</span> with{" "}
                            <span className="FDC642">different favours</span>{" "}
                            towards <span className="FF5857">risks</span> and{" "}
                            <span className="FF5857">earnings</span>.&gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Graphics.png")}
                            alt="Graphics"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; Tranching Pools have different levels, from
                            Superior to Inferior. The more superior the more
                            aggressive the{" "}
                            <span className="A4CF27">pool earning rate</span>{" "}
                            is, but users also need to face more{" "}
                            <span className="FF5857">risks</span>, and vice
                            versa. &gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/OBJECTS.png")}
                            alt="OBJECTS"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt;{" "}
                            <span className="FF5857">Tranching AI Engine</span>{" "}
                            also runs above Tranching pools to optimize the{" "}
                            <span className="E72D9F0">earning/risk ratios</span>
                            .&gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Isolation_Mode.png")}
                            alt="Isolation_Mode"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; Tranching Pools not only connect with{" "}
                            <span className="FDC642">DeFi</span> products on
                            Tranching Protocol platform, but also able to{" "}
                            <span className="E72D9F0">connect</span> with other
                            products.&gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Analytical_Research.png")}
                            alt="Analytical_Research"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; Risks of system failure are protected by{" "}
                            <span className="FF5857">
                              Tranching AI algorithms
                            </span>
                            . Tranching AI Engine is able to shut down the
                            operations for the products on Layer 4 to close the
                            connection between Layer 4 and Layer 2 in unusual
                            situations, such as Oracle failures, etc. &gt;
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="cd">{"}"}</p>
                    {/* <p className="code">
                      <code>
                        <span className="E72D9F0">var 2</span> = Tranching Pool
                        Risk & Earnings About
                      </code>
                    </p> */}
                  </div>
                  <div
                    className="item"
                    style={{ display: pools_o.value === 2 ? "block" : "none" }}
                  >
                    <h2 className="title">{"{"}[Investment Direction]</h2>
                    <div className="row">
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Group 36.png")}
                            alt="Group 36"
                          />
                        </p>
                        <div className="text">
                          <p className="title_s">
                            <span className="A4CF27">Superior Strategy</span>{" "}
                            Direction
                          </p>
                          <p>
                            <span className="FDC642"> AI-based high-risk</span>,{" "}
                            <span className="FF5857">high-reward</span>{" "}
                            investment strategy, aimed at pursuing opportunities
                            with elevated potential returns, leveraging the{" "}
                            <span className="E72D9F0">
                              formidable analytical capabilities
                            </span>{" "}
                            of AI technology to assist in decision-making.
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Group 37.png")}
                            alt="Group 37"
                          />
                        </p>
                        <div className="text">
                          <p className="title_s">
                            <span className="FF5857">Inferior Strategy</span>{" "}
                            Direction
                          </p>
                          <p>
                            <span className="FDC642">
                              AI-based conservative investment strategy
                            </span>{" "}
                            aimed at achieving stable capital preservation and{" "}
                            <span className="E72D9F0">
                              moderate investment returns
                            </span>
                            , supported by intelligent analysis and risk control
                            through AI technology to facilitate the
                            decision-making process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="cd">{"}"}</p>
                    {/* <p className="code">
                      <code>
                        <span className="E72D9F0">var 3</span> = Tranching Pool
                        Risk & Earnings About
                      </code>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container strategy">
        <div className="box">
          <h1>
            <span>Tranching</span> <span>Protocol as a </span>
            <span>new ‘staking</span> strategy’
          </h1>
          <div className="text">
            <p>
              <span className="FDC642">Investors/wealth management</span> teams
              have different strategies based on different retracement on{" "}
              <span className="A4CF27">investment portfolios.</span>
            </p>
            <p>
              In order to attract more investors/users, Tranching Protocol is
              perfect for them to choose the right Tranching Pools for their
              <span className="A4CF27">investment portfolios.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container Pools" id="Pools_">
        <div className="tops">
          <button className="title_btn">Tranching Pools</button>
          {/* <p className="code_">
            <code>
              <span className="FF5857">Print</span>("Hello World")
            </code>
          </p> */}
          <div className="content">
            <div className="sequence">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
              <p>12</p>
              <p>13</p>
              <p>14</p>
            </div>
            <div className="box">
              <div className="tab">
                <div className="tab_text">
                  <div className="item">
                    <h2 className="title">
                      <span>Liquidity of</span>
                      <span> Risk/</span>Earnings{"{"}
                    </h2>
                    <p className="code_top">
                      <span className="FDC642">&lt; TVL is key</span> for all{" "}
                      <span className="E72D9F0">DeFi</span>{" "}
                      <span className="FDC642">projects &gt;</span>
                    </p>
                    <div className="row">
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Rating container.png")}
                            alt="Rating container"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; <span className="FF5857">LPs</span> is looking
                            for <span className="E72D9F0">attractive</span> and{" "}
                            <span className="E72D9F0">stable</span> yield rate
                            &gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Container.png")}
                            alt="Container"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; A combination of{" "}
                            <span className="FDC642">tranching pools</span> can
                            back a series of{" "}
                            <span className="E72D9F0">DeFi</span> products,
                            which is useful for launching new products. &gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Switch container.png")}
                            alt="Switch container"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; Current <span className="E72D9F0">DeFi</span>{" "}
                            product can only provide one(1) yield rate, but with
                            Tranching Protocol, a common{" "}
                            <span className="FF5857">6%</span>
                            <span className="DBA0DB">yield rate</span> can be
                            separated into a combination of multiple LP pools,
                            such as one pool with{" "}
                            <span className="FF5857">8%</span>{" "}
                            <span className="DBA0DB">yield rate</span> of high
                            risks and one equal size pool with{" "}
                            <span className="FF5857">4%</span>
                            <span className="DBA0DB">yield rate</span> of low
                            risks &gt;
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <p className="imgs">
                          <img
                            src={require("../../static/images/Rating container1.png")}
                            alt="Rating container1"
                          />
                        </p>
                        <div className="text">
                          <p>
                            &lt; When there is a loss for the LPs of a certain
                            Defi product,{" "}
                            <span className="E72D9F0">
                              superior Tranching pools
                            </span>{" "}
                            will have majority of the loss even up to 100% of
                            the loss, and vice versa.
                            <br />
                            <br />
                            <br />
                            Therefore, the{" "}
                            <span className="FDC642">
                              wealth management
                            </span>{" "}
                            team and <span className="DBA0DB">investors</span>
                            have more options to manage their portfolios &gt;
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="cd">{"}"}</p>
                    {/* <p className="code">
                      <code>
                        <span className="E72D9F0">var 4</span> = Liquidity of
                        Risk & Earnings
                      </code>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container Protocols">
        <button className="title_btn">AI in Tranching Protocol</button>
        <h1 className="title">
          AI in Tranching
          <br /> Protocols
        </h1>
        <p className="cds">
          &lt; AI Powered <span className="FDC642">risk control</span> and{" "}
          <span className="FDC642">optimised earnings</span> for LPs &gt;
        </p>
        <div className="box">
          <div className="item">
            <div className="imgs">
              <img
                src={require("../../static/images/Switch container (1).png")}
                alt="Switch container (1)"
              />
            </div>
            <div className="text">
              <p className="title_s">
                <span className="A4CF27">AI Trading Bots</span>
              </p>
              <p className="des">
                &lt; Bots runs above the APIs (Layer 5). AI is widely adopted by{" "}
                <span className="E72D9F0">traditional finance</span>. Investors
                can pick <span className="A4CF27">trading bots</span> for{" "}
                <span className="FDC642">automate trading strategy</span> and{" "}
                <span className="FDC642">optimise earning yields</span> in
                different tranching pools &gt;
              </p>
            </div>
          </div>
          <div className="item">
            <div className="imgs">
              <img src={require("../../static/images/Card.png")} alt="Card" />
            </div>
            <div className="text">
              <p className="title_s">
                <span className="DBA0DB">Tranching AI Engine</span>
              </p>
              <p className="des">
                &lt; Optimize <span className="FDC642">earnings/risks</span>.{" "}
                <span className="E72D9F0">AI Engine</span>{" "}
                <span className="A4CF27">protect</span> Tranching protocol from
                system failures, such as avoiding market collapse/crash like
                $LUNA and $UST &gt;
              </p>
            </div>
          </div>
        </div>
        <p className="cd">{"}"}</p>
        <p style={{ marginBottom: "2rem" }}>
          <button className="title_btn">Tranching Dex</button>
        </p>
        <div className="list_s">
          <div className="left">
            <h2>Tranching DEX {"{"}</h2>
            <p className="des">
              &lt; Perpetual DEX based on <span className="FDC642">EVM</span>{" "}
              and launching on <span className="FDC642">opBNB</span> and{" "}
              <span className="E72D9F0">Nautilus Chain</span>&gt;
            </p>
            <p className="cd">{"}"}</p>
          </div>
          <div className="right">
            <div className="tab">
              <div className="tab_title">
                <span
                  className="box active"
                  onClick={() => {
                    setOpenPools_(!openPools_);
                  }}
                >
                  {text}
                  <img src={require("../../static/images/sel.png")} alt=""/>
                </span>
                <div className="list pcList">
                    <span
                      className={index_ === 0 ? "active" : ""}
                      onClick={() => {
                        setIndex_(0);
                        setText('50K')
                        setOpenPools_(false)
                      }}
                    >
                      50K
                    </span>
                    <span
                      className={index_ === 1 ? "active" : ""}
                      onClick={() => {
                        setIndex_(1);
                        setText('5Risk-Free0K')
                        setOpenPools_(false)
                      }}
                    >
                      Risk-Free
                    </span>
                    <span
                      className={index_ === 2 ? "active" : ""}
                      onClick={() => {
                        setIndex_(2);
                        setText('Decentralized');
                        setOpenPools_(false)
                      }}
                    >
                      Decentralized
                    </span>
                  </div>
                {openPools_ ? (
                  <div className="list">
                    <span
                      className={index_ === 0 ? "active" : ""}
                      onClick={() => {
                        setIndex_(0);
                        setText('50K')
                        setOpenPools_(false)
                      }}
                    >
                      50K
                    </span>
                    <span
                      className={index_ === 1 ? "active" : ""}
                      onClick={() => {
                        setIndex_(1);
                        setText('5Risk-Free0K')
                        setOpenPools_(false)
                      }}
                    >
                      Risk-Free
                    </span>
                    <span
                      className={index_ === 2 ? "active" : ""}
                      onClick={() => {
                        setIndex_(2);
                        setText('Decentralized');
                        setOpenPools_(false)
                      }}
                    >
                      Decentralized
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="tab_content">
                <div
                  className="item"
                  style={{ display: index_ === 0 ? "flex" : "none" }}
                >
                  <img
                    src={require("../../static/images/Checkbox container.png")}
                    alt="Checkbox container"
                  />
                  <p>
                    Support for trading pairs with up to 50X leverage trading.
                  </p>
                </div>
                <div
                  className="item"
                  style={{ display: index_ === 1 ? "flex" : "none" }}
                >
                  <img
                    src={require("../../static/images/Isolation_Mode2.png")}
                    alt="Isolation_Mode2.png"
                  />
                  <p>
                    Error risk control by prognosticators and exchange portfolio
                    quotes.
                  </p>
                </div>
                <div
                  className="item"
                  style={{ display: index_ === 2 ? "flex" : "none" }}
                >
                  <img
                    src={require("../../static/images/Isolation_Mode3.png")}
                    alt="Isolation_Mode3"
                  />
                  <p>
                    In addition to crypto assets, Forex, Commodities, Gold and
                    other assets even RWA assets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container Pools" id="Roadmap">
        <div className="tops">
          <button className="title_btn">Tranching Pools</button>
          <div className="content">
            <div className="box">
              <div className="left">
                {/* <p className="code_">
                  <code>
                    <span className="FF5857">Print</span>("Hello World")
                  </code>
                </p> */}
                <div className="sequence">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                </div>
                <div className="text">
                  <h1>
                    <span>Layer Design</span> <span>for</span>{" "}
                    <span>Tranching</span> Protocol {"{"}
                  </h1>
                  <ul>
                    <li>
                      <p className="tx">
                        <i></i>
                        <span className="DBA0DB">Layer 5</span> ... APIs,
                        Gateways
                      </p>
                    </li>
                    <li>
                      <p className="tx">
                        <i></i>
                        <span className="FDC642">Layer 4</span> ... DeFi,
                        TradeFi, Derivatives, RWAs
                      </p>
                    </li>
                    <li>
                      <p className="tx">
                        <i></i>
                        <span className="E72D9F0">Layer 3</span> ... Accounts,
                        DIDs, Authentications, Tranching AI Engine
                      </p>
                    </li>
                    <li>
                      <p className="tx">
                        <i></i>
                        <span className="A4CF27">Layer 2</span> ... Tranching
                        Pools (Multiple pools published)
                      </p>
                    </li>
                    <li>
                      <p className="tx">
                        <i></i>
                        <span className="FF5857">Layer 1</span> ... BNB Chain,
                        Ethereum, Polygon and other blockchains
                      </p>
                    </li>
                  </ul>
                  <p className="cd">{"}"}</p>
                  {/* <p className="code">
                    <code>
                      <span className="E72D9F0">
                        var 5 = Layer Design for Tranching
                      </span>
                    </code>
                  </p> */}
                </div>
              </div>
              <div className="right">
                {/* <p className="code_">
                  <code>
                    <span className="FF5857">Print</span>("Goole Technology")
                  </code>
                </p> */}
                <div className="sequence">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                </div>
                <div className="text">
                  <h1>
                    <span>Tranching</span> <span>Protocol</span> ‘Roadmap’ {"{"}
                  </h1>
                  <div className="boxs">
                    <div className="item">
                      <div className="time">
                        <span className="FF5857">2021-2022</span>
                        <em>...</em>
                      </div>
                      <div className="txt">
                        <p>
                          <i></i>Develop the{" "}
                          <span className="FF5857">algorithm</span> of the
                          cession mechanism
                        </p>
                        <p>
                          <i></i>Build{" "}
                          <span className="FF5857">Tranching AI</span> data
                          analysis model
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="time">
                        <span className="FF5857">2023 Q1+Q2</span>
                        <em>...</em>
                      </div>
                      <div className="txt">
                        <p>
                          <i></i>Finalizing the{" "}
                          <span className="A4CF27">Tranching AI</span> + Product
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="time">
                        <span className="FF5857">2023 Q3</span>
                        <em>...</em>
                      </div>
                      <div className="txt">
                        <p>
                          <i></i>Tranching{" "}
                          <span className="E72D9F0">Protocol</span> +{" "}
                          <span className="E72D9F0">Pool</span>
                        </p>
                        <p>
                          <i></i>Alpha Version Testing Phrase
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="time">
                        <span className="FF5857">2023 Q4</span>
                        <em>...</em>
                      </div>
                      <div className="txt">
                        <p>
                          <i></i>Tranching Pool + Perpetual Swap + Options
                        </p>
                        <p>
                          <i></i>
                          <span className="FDC642">Beta Version</span> Launch
                        </p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="time">
                        <span className="FF5857">2023 Q1</span>
                        <em>...</em>
                      </div>
                      <div className="txt">
                        <p>
                          <i></i>Tranching Pool
                        </p>
                        <p>
                          <i></i>
                          <span className="A4CF27">Launch</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="cd">{"}"}</p>
                  {/* <p className="code">
                    <code>
                      <span className="E72D9F0">var 6</span>{" "}
                      <span className="ffffff">
                        = Tranching Protocol Roadmap
                      </span>
                    </code>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container Partners">
        <button>Tranching Partners</button>
        <div className="partenrsContent">
          <div className="box1">
            <div>
                <img src={require("../../static/images/Image1.png")} alt="" />
            </div>
          </div>
          <div className="box1">
            <div>
              <img src={require("../../static/images/Image2.png")} alt=""/>
            </div>
          </div>
          <div className="box1">
            <div>
            <img src={require("../../static/images/Image3.png")} alt="" />
            </div>
          </div>
          <div className="box1">
            <div>
                <img src={require("../../static/images/Image4.png")} alt="Animoca Brands " />
            </div>
          </div>
          <div className="box1">
            <div>
              <img src={require("../../static/images/Image5.png")} alt="" />
            </div>
          </div>
          <div className="box1">
            <div>
            <img src={require("../../static/images/Image6.png")} alt=""/>
            </div>
          </div>
          <div className="box1 height95">
            <div>
              <img src={require("../../static/images/Image7.png")} alt="" />
            </div>
          </div>
          <div className="box1">
            <div>
            <img src={require("../../static/images/Image8.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeView;
