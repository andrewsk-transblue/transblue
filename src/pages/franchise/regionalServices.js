import pools from '../../images/franchise/pools.jpg';
import decks from '../../images/franchise/decks.jpg';
import nwfirepit from '../../images/franchise/services/nwfirepit.jpg';
import sunroom from '../../images/franchise/sunroom.jpg';
import nwpatiocover from '../../images/franchise/services/nwpatiocover.jpg';
import nwretaining from '../../images/franchise/services/nwretaining.jpg';
import nwkitchen from '../../images/franchise/services/nwkitchen.jpg';
import wdeck from '../../images/franchise/services/wdeck.jpg';
import wkitchen from '../../images/franchise/services/wkitchen.jpg';
import wpool from '../../images/franchise/services/wpool.jpg';

const regionalServices = {
    'northwest': {
        services: ['PATIO COVERS', 'FIREPITS', 'RETAINING WALLS', 'OUTDOOR KITCHEN'],
        images: [nwpatiocover , nwfirepit, nwretaining, nwkitchen ]
    },
    'west': {
        services: ['POOLS', 'DECKS', 'FIREPITS', 'OUTDOOR KITCHENS'],
        images: [wpool, wdeck, nwfirepit, wkitchen]
    },
    'northeast': {
        services: ['SUNROOMS', 'PATIOS', 'POOLS', ''],
        imagse: [nwpatiocover , nwfirepit, nwretaining, nwkitchen]
    },
    'midwest': {
        services: ['POOLS', 'SYNTHETIC TURF', 'DECKS', 'PAVERS'],
        images: [pools, nwfirepit, nwretaining, nwkitchen]
    },
    'southwest': {
        services: ['SUNROOMS', 'PATIOS', 'POOLS', 'POOLS'],
        images: [sunroom, nwpatiocover, pools, pools]
    }
}

export default regionalServices;