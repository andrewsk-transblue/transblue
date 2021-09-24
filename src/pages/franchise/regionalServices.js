import pools from '../../images/franchise/services/pools.jpg';
import nwdecks from '../../images/franchise/services/nwdecks.jpg';
import nwfirepit from '../../images/franchise/services/nwfirepit.jpg';
import sunroom from '../../images/franchise/services/sunroom.jpg';
import nwpatiocover from '../../images/franchise/services/nwpatiocover.jpg';
import nwretaining from '../../images/franchise/services/nwretaining.jpg';
import nwkitchen from '../../images/franchise/services/nwkitchen.jpg';
import wdeck from '../../images/franchise/services/wdeck.jpg';
import wkitchen from '../../images/franchise/services/wkitchen.jpg';
import nepool from '../../images/franchise/services/nepool.jpg';
import wpool from '../../images/franchise/services/wpool.jpg';
import nekitchen from '../../images/franchise/services/nekitchen.jpg';
import spool from '../../images/franchise/services/spool.jpg';
import spatio from '../../images/franchise/services/spatio.jpg';
import mwpatio from '../../images/franchise/services/mwpatio.jpg';
import mwpool from '../../images/franchise/services/mwpool.jpg';
import mwdeck from '../../images/franchise/services/mwdeck.jpg';

const regionalServices = {
    'northwest': {
        services: ['PATIO COVERS', 'FIREPITS', 'DECKS', 'OUTDOOR KITCHEN'],
        images: [nwpatiocover , nwfirepit, nwdecks, nwkitchen ]
    },
    'west': {
        services: ['POOLS', 'DECKS', 'FIREPITS', 'OUTDOOR KITCHENS'],
        images: [wpool, wdeck, nwfirepit, wkitchen]
    },
    'northeast': {
        services: ['SUNROOMS', 'PATIOS', 'POOLS', 'OUTDOOR KITCHENS'],
        images: [nwpatiocover , nwfirepit, nepool, nekitchen]
    },
    'midwest': {
        services: ['SUNROOMS', 'POOLS', 'PATIOS', 'DECKS'],
        images: [sunroom, mwpool, mwpatio, mwdeck]
    },
    'southwest': {
        services: ['SUNROOMS', 'PATIOS', 'POOLS', 'POOLS'],
        images: [sunroom, spatio, spool, pools]
    }
}

export default regionalServices;