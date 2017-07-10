import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/templates/contentHeader';
import Content from '../common/templates/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader';
import TabsContent from '../common/tab/tabsContent';
import TabContent from '../common/tab/tabContent';
import { selectTab, showTabs } from '../common/tab/tabActions';
import { create, update, remove } from './billingCycleActions';

import BillingCycleList from './billingCycleList';
import BillingCycleForm from './billingCycleForm';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='edit' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <BillingCycleList />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCycleForm
                  onSubmit={this.props.create}
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm
                  onSubmit={this.props.update}
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <BillingCycleForm
                onSubmit={this.props.remove}
                submitLabel="Excluir"
                submitClass="danger"
                readOnly={true}
              />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);